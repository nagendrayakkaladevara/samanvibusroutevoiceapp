export interface BusStop {
  id: string;
  name: string;
  code: string;
  audioFile: string;
}

export interface BusRoute {
  id: string;
  routeNumber: string;
  routeName: string;
  stops: BusStop[];
}

export interface AudioState {
  isPlaying: boolean;
  currentStop: string | null;
  duration: number;
  position: number;
}