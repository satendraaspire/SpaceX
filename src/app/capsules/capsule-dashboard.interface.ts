export interface CapsuleType {
  docs: [
    {
      reuse_count: number;
      water_landings: number;
      land_landings: number;
      last_update: string;
      launches: [];
      serial: string;
      status: string;
      type: string;
      id: string;
    }
  ];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
}

export interface QueryType {
  options: {
    limit: number;
  };
}
