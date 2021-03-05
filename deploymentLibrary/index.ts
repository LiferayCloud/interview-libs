/**
 * Fake Deployment Library to be used on the Services API Challenge.
 */

import { ServiceData, DeploymentStatus } from './types';

export const UNEXISTING_IMAGE = 'unexisting/image';

const deployedServices: { [key: string]: boolean } = {};

export const DeploymentLibrary = {
  /**
   * This just waits for a few seconds before marking the given Service as deployed,
   * trying to mimic the fact that deployments take a while to become ready.
   */
  deploy: ({ id, image }: ServiceData): void => {
    if (image === UNEXISTING_IMAGE) {
      throw new Error('Cannot deploy service: image not found');
    }

    setTimeout(() => (deployedServices[id] = true), calculateRandomWaitTime());
  },

  /**
   * Returns the deployment status for the Service with the given id.
   */
  getDeploymentStatus: (id: string): DeploymentStatus => {
    return deployedServices[id]
      ? DeploymentStatus.RUNNING
      : DeploymentStatus.PENDING;
  }
}

/**
 * Calculate a random amount of seconds to wait.
 */
const calculateRandomWaitTime = () => {
  return (Math.floor(Math.random() * 10000) % 5000) + 2000;
};

export * from './types';
