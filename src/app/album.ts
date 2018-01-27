import { Track } from "app/track";

export interface Album {
    
    name : string;
    
    releaseDate: string;

    coverImage: string;
    
    track: Track[]
}
