export interface ServiceData {
  id: string;
  image: string;
}

export enum DeploymentStatus {
  PENDING = 'PENDING',
  RUNNING = 'RUNNING',
}
