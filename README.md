# lc-interviews

Code to be shared with candidates interviewing for Liferay Cloud.

## Deployment Library

For the Services API challenge you'll be given this library to work with.

```js
import { DeploymentLibrary } from '@liferaycloud/interviews';

// Deploys the given service.
DeploymentLibrary.deploy(service);

// Gets the current deployment status of the given service.
DeploymentLibrary.getDeploymentStatus(serviceId);
```
