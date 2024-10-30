export type Result<T> =
  | {
      success: true;
      data: T;

    }
  | {
      success: false;
      error: {
        code: string;
        message: string;
      };
    };

    export interface ProjectType {
        id: string;
        name: string;
        description: string;
        startDate: string;
        endDate: string;
        imageUrl: string;
        publishedAt: string;
        publicStatus: boolean;
        
    }

   export type ProjectRepository = {
      list: (query?: Record<string, string>) => Promise<Result<ProjectType[]>>;
      create: (data: ProjectType) => Promise<Result<ProjectType>>;
    };

    