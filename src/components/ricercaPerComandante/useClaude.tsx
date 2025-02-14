import { useGetCardQuery } from '../../api';
interface CardProps {
  commander: {
    nomeComandante: string;
    coloriComandante: string[];
    archidekt: string;
    linkLista: string;
  };
}

export function Card({ commander }: CardProps) {
  const { data, error, isLoading } = useGetCardQuery(commander.nomeComandante);

  return (
    <div className="card flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="card-image mb-4 w-full">
        {isLoading ? (
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">Loading image...</div>
        ) : error || !data ? (
          <div className="w-full h-64 bg-red-200 rounded-lg flex items-center justify-center">Error loading image</div>
        ) : (
          <img
            src={data.image_uris?.normal || data.card_faces?.[0]?.image_uris?.normal}
            alt={commander.nomeComandante}
            className="w-full h-auto rounded-lg"
          />
        )}
      </div>
      <div className="card-content text-center w-full">
        {/* <h2 className="text-xxl font-bold mb-2">{commander.nomeComandante}</h2>
        <div className="mana-symbols flex justify-center gap-2 mb-5">
          {commander.coloriComandante.map((color, index) => (
            <img
              key={`color-${color}-${index}`}
              src={`https://svgs.scryfall.io/card-symbols/${color}.svg`}
              alt={color}
              className="w-12 h-12 mb-4"
            />
          ))}
        </div> */}
        <div className="card-actions flex flex-col sm:flex-row justify-around gap-2">
          <a
            href={commander.archidekt}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Archidekt
          </a>
          <a
            href={commander.linkLista}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Gold-Fish
          </a>
        </div>
      </div>
    </div>
  );
}

interface CardGridProps {
  commanders: CardProps['commander'][];
}

export function CardGrid({ commanders }: CardGridProps) {
  return (
    <div>
    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 p-4"> */}
      {commanders.map((commander, index) => (
        <Card key={`commander-${index}`} commander={commander} />
      ))}
    </div>
  );
}
