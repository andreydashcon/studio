'use client';

// To use this component with live Google Maps, you need to:
// 1. Install the library: npm install @vis.gl/react-google-maps
// 2. Get a Google Maps JavaScript API key.
// 3. Set up an environment variable `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` with your key.
// 4. Uncomment the Google Maps related code below.

// import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import Image from 'next/image';

export default function InteractiveMap({ apiKey }: { apiKey?: string }) {
  const position = { lat: -27.2115, lng: -49.6730 }; // Example: Salete, SC coordinates

  // if (!apiKey) {
    return (
      <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center text-center p-4">
        <p className="text-lg font-medium text-gray-700 mb-2">Mapa Interativo Indisponível</p>
        <p className="text-sm text-gray-500">
          Uma chave de API do Google Maps é necessária para exibir o mapa.
          Por favor, configure a variável de ambiente NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
        </p>
        <div className="mt-4 w-full h-full max-w-md max-h-[200px] relative">
           <Image 
            src="https://placehold.co/600x300.png" // Placeholder for map
            alt="Mapa da localização da Agro Saletense" 
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            data-ai-hint="map salete"
          />
        </div>
      </div>
    );
  // }

  /*
  return (
    <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={position}
          defaultZoom={15}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId="agroconnect_map" // Optional: for custom styling in Google Cloud Console
        >
          <Marker position={position} title="AgroConnect SC" />
        </Map>
      </APIProvider>
    </div>
  );
  */
}
