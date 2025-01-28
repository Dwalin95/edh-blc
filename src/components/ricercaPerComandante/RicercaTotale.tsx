import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import commanderData from "../archive/edhArchive.json";
import { Card } from "./useClaude";
// import RadialGradient from "../RadialGradient";

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
};

const CommanderSearch = () => {
  const [filteredCommanders, setFilteredCommanders] = useState(commanderData);
  const { register, handleSubmit, control, reset } = useForm<SearchFormData>({
    defaultValues: {
      commanderName: "",
      colors: [],
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

      return nameMatch && colorMatch;
    });

    setFilteredCommanders(filtered);
  };

  const handleReset = () => {
    reset();
    setFilteredCommanders(commanderData);
  };

  const noResults = filteredCommanders.length === 0;

  return (
    <div className="min-h-screen">
      {/* <RadialGradient scale="scale-y-1" opacity="opacity-30" /> */}
      <div className="px-4 sm:px-6 py-8">
        <div className="max-w-3xl mx-auto mb-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white dark:bg-[--darkblue] rounded-lg shadow-md p-6"
          >
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-white text-xl font-bold my-2">
                Commander Name
              </label>
              <input
                {...register("commanderName")}
                className="w-full mt-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-black dark:text-white"
                placeholder="Cerca per nome..."
              />
            </div>

            <div className="">
              <label className="block text-gray-700 dark:text-white text-xl font-bold">
                Colori (exact match)
              </label>
              <div className="flex flex-wrap gap-5 my-6 lg:gap-12">
                {colorOptions.map((color) => (
                  <Controller
                    key={color.value}
                    name="colors"
                    control={control}
                    render={({ field }) => (
                      <label className="flex items-center justify-center space-x-2 cursor-pointer">
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

            <div className="flex gap-4">
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
              width="480"
              height="271"
              frameBorder="0"
              allowFullScreen
            ></iframe>

            <p className="italic text-gray-600 dark:text-gray-400 mt-4">
              Dannazione la lista non c'è!
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-5 p-5">
          {filteredCommanders.map((commander, index) => (
            <Card
              key={index}
              commander={{
                nomeComandante: commander.nomeComandante,
                coloriComandante: commander.coloriComandante,
                archidekt: commander.archidekt,
                linkLista: commander.linkLista,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommanderSearch;
