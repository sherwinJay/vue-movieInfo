import type { Ref } from "vue";

export type HomeCardData = {
  title: string;
  name: string;
  id: string | number;
  overview: string;
  vote_average: number;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  runtime?: string | number;
  media_type: "movie" | "tv";
};

export type GenreType = {
  id: number;
  name: string;
};

export type MovieDataType = {
  backdrop_path: string;
  title: string;
  name: string;
  poster_path: string;
  genres: GenreType[];
  release_date: string | null;
  first_air_date: string | null;
  media_type: "movie" | "tv";
  runtime: number;
  vote_average: number;
  episode_run_time: number[];
  tagline: string;
  overview: string;
  videos: {
    results: MovieDataVideosType[];
  };
  credits: {
    cast: CastType[];
    crew: CrewType[];
  };
  created_by?: CreatorType[];
  budget: number;
  revenue: number;
  status: string;
  production_companies: ProductionCompaniesType[];
  original_name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  id: number;
};

export type MovieDataVideosType = {
  // results: {
  name: string;
  key: string;
  id: string;
  // };
};

export type BannerWrapperType = {
  backdropUrl: string | undefined;
  posterUrl: string | undefined;
  showTitle?: string;
  releaseDate: string | null | undefined;
  genres: GenreType[] | undefined;
  runtime: number | undefined;
  voteAverage: number | undefined;
  tagline?: string;
  overview?: string;
  videos?: {
    results: MovieDataVideosType[];
  };
  crews?: CrewType[];
  creator?: CreatorType[];
  mediaType: "movie" | "tv";
};

export type BannerIconsType = {
  voteAverage: number | undefined;
  runtime: number | undefined;
  mediaType: "movie" | "tv";
  trailer?: string;
};

export type CastType = {
  name: string;
  character: string;
  profile_path: string;
  id: number;
};

export type CrewType = {
  name: string;
  job: string;
  profile_path?: string;
  id: number;
};

export type CreatorType = {
  name: string;
  id: number;
  job?: string;
};

export type LeadCastType = {
  casts?: CastType[];
};

export type ProductionCompaniesType = {
  id: number;
  name: string;
};

export type MovieSidebarType = {
  productionCompanies?: ProductionCompaniesType[];
  crews?: CrewType[];
  budget?: number;
  revenue?: number;
  status?: string;
  original_name?: string;
  number_of_episdoes?: number;
  mediaType: "movie" | "tv";
};

export type RecommendedType = {
  pageId: string | number;
  mediaType: string;
  signal?: AbortSignal | undefined;
};

export type RecommendData = {
  id: string;
  title: string;
  name: string;
  backdrop_path: string;
  [key: number]: { backdrop_path: string };
  length: number;
};

export type CardPropType = {
  imageSrc: string;
  name?: string;
  title?: string;
  link: string | number;
  mediaType?: "tv" | "movie";
  template: "trending" | "featured";
};

export type ActorInformationType = {
  birthday?: string;
  gender?: number;
  name?: string;
  id?: number;
  birthPlace?: string;
  alsoKnownAs?: string[];
  deathday?: string | null;
};

export type ActorTypes = {
  biography: string;
  birthday: string;
  gender: number;
  name: string;
  profile_path: string;
  id: number;
  place_of_birth?: string;
  also_known_as: string[];
  deathday: string | null;
};

export type SocialMediaAccountsTypes = {
  facebook_id: string | null;
  twitter_id: string | null;
  instagram_id: string | null;
  youtube_id: string | null;
};

export type ActorCreditsTypes = {
  // cast: any;
  title: string;
  name: string;
  popularity: number;
  character: string;
  media_type: "movie" | "tv";
  poster_path: string | null;
  job: string;
  release_date: string;
  first_air_date: string;
  first_credit_air_date: string;
  id: number;
  credit_id: string;
  episode_count: number;
};

export type FetchSearchType = {
  searchValue: Ref<string, string>;
  signal?: AbortSignal | undefined;
};

export type SearchData = {
  media_type: string;
  title: string;
  name: string;
  id: string;
};

export type MediaType = "movie" | "tv";

export type TrailersProps = {
  popularity: number;
  name: string;
  title: string;
  backdrop_path: string;
  media_type: "movie" | "tv";
  id: number | string;
};

export type TrailerThumbnailProps = {
  name: string;
  title: string;
  backdrop_path: string;
  media_type: "movie" | "tv";
  id: string;
  pointerEvent(data: string | null | undefined): void;
};

export type TrailerType = {
  key: string;
  type: "Trailer";
};
