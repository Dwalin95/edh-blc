import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useGetCommandersQuery } from "../../api";
import { Card } from "./useClaude";

const colorOptions = [
  {
    value: "W",
    label: "White",
    symbol: "https://svgs.scryfall.io/card-symbols/W.svg",
  },
  {
    value: "U",
    label: "Blue",
    symbol: "https://svgs.scryfall.io/card-symbols/U.svg",
  },
  {
    value: "B",
    label: "Black",
    symbol: "https://svgs.scryfall.io/card-symbols/B.svg",
  },
  {
    value: "R",
    label: "Red",
    symbol: "https://svgs.scryfall.io/card-symbols/R.svg",
  },
  {
    value: "G",
    label: "Green",
    symbol: "https://svgs.scryfall.io/card-symbols/G.svg",
  },
];

type SearchFormData = {
  commanderName: string;
  colors: string[];
  bracket: string;
};

// Definisci il tipo CardResponseScryfall se non è già definito
type CardResponseScryfall = {
  nomeComandante: string;
  coloriComandante: string[];
  archidekt?: string;
  linkLista?: string;
  moxfield?: string;
  bracket?: number;
};

const CommanderSearch = () => {
  const { data: commanderData = [], isLoading } = useGetCommandersQuery();
  const [filteredCommanders, setFilteredCommanders] = useState<CardResponseScryfall[]>([]);

  useEffect(() => {
    // Aggiorna lo stato quando commanderData cambia
    setFilteredCommanders(commanderData);
  }, [commanderData]);

  const { register, handleSubmit, control, reset } = useForm<SearchFormData>({
    defaultValues: {
      commanderName: "",
      colors: [],
      bracket: "",
    },
  });

  const checkColorMatch = (
    commanderColors: string[],
    searchColors: string[]
  ) => {
    if (searchColors.length === 0) return true;

    const commanderUniqueColors = new Set(
      commanderColors.flatMap((color) => {
        if (/^\d+$/.test(color)) return [];
        return color.length > 1 ? color.split("") : [color];
      })
    );

    const commanderColorArray = Array.from(commanderUniqueColors);

    return (
      searchColors.length === commanderColorArray.length &&
      searchColors.every((color) => commanderColorArray.includes(color)) &&
      commanderColorArray.every((color) => searchColors.includes(color))
    );
  };

  const onSubmit = (data: SearchFormData) => {
    const filtered = commanderData.filter((commander) => {
      const nameMatch = commander.nomeComandante
        .toLowerCase()
        .includes(data.commanderName.toLowerCase());

      const colorMatch = checkColorMatch(
        commander.coloriComandante,
        data.colors
      );

      const bracketMatch = data.bracket === "" || 
        (commander.bracket?.toString() ?? "") === data.bracket;

      return nameMatch && colorMatch && bracketMatch;
    });

    setFilteredCommanders(filtered);
  };

  const handleReset = () => {
    reset();
    setFilteredCommanders(commanderData);
  };

  const noResults = !isLoading && filteredCommanders.length === 0;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-6 py-8">
        <div className="max-w-3xl mx-auto mb-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[--darkblue] text-[--white] rounded-lg shadow-md p-6"
          >
            <div className="mb-6">
              <label className="block text-[--white] text-xl font-bold my-2">
                Commander Name
              </label>
              <input
                {...register("commanderName")}
                className="w-full mt-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[--darkblue] text-[--white]"
                placeholder="Cerca per nome..."
              />
            </div>

            <div className="mb-6">

              <label className="block text-[--white] text-xl font-bold my-2">
              ⚠️ Attenzione!: ⚠️ 
              </label>
              <label className="block text-[--white] text-xl font-bold my-2">
              I bracket sono indicativi e presi da Moxfield, possono non rispecchiare il livello del mazzo perchè la costruzione si basa su un budget massimo di 100$
              </label>
              <label className="block text-[--white] text-xl font-bold my-2">
                Bracket (1-5)
              </label>
              <select
                {...register("bracket")}
                className="w-full mt-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[--darkblue] text-[--white]"
              >
                <option value="">Qualsiasi bracket</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div>
              <label className="block text-[--white] text-xl font-bold mb-4">
                Colori (exact match)
              </label>
              <div className="flex flex-wrap items-center justify-center sm:justify-center gap-4 my-6">
                {colorOptions.map((color) => (
                  <Controller
                    key={color.value}
                    name="colors"
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center justify-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="hidden"
                          onChange={(e) => {
                            const newColors = e.target.checked
                              ? [...field.value, color.value]
                              : field.value.filter((c) => c !== color.value);
                            field.onChange(newColors);
                          }}
                          checked={field.value.includes(color.value)}
                        />
                        <div
                          className={`flex items-center justify-center p-2 rounded-full transition-all ${
                            field.value.includes(color.value)
                              ? "bg-gray-200 scale-110"
                              : "bg-gray-100 opacity-50"
                          }`}
                        >
                          <img
                            src={color.symbol}
                            alt={color.label}
                            className="w-20 h-20"
                          />
                        </div>
                      </label>
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
              >
                Cerca
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 bg-gray-500 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {noResults && (
          <div className="flex flex-col items-center py-10">
            <iframe
              src="https://giphy.com/embed/s0FsE5TsEF8g8"
              className="w-full max-w-xs sm:max-w-md h-auto"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="italic text-gray-600 dark:text-gray-400 mt-4">
              Dannazione la lista non c'è!
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-5 p-5">
          {filteredCommanders.map((commander, index) => (
            <Card
              key={index}
              commander={{
                nomeComandante: commander.nomeComandante,
                coloriComandante: commander.coloriComandante,
                archidekt: commander.archidekt ?? "",
                linkLista: commander.linkLista ?? "",
                moxfield: commander.moxfield ?? "",
                bracket: commander.bracket ?? 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommanderSearch;