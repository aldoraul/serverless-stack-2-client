const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "aa-notes-app-2-api-dev-attachmentsbucket-1oce82r8q3ow1"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://16qusl8rwb.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_PYJMGtE3G",
    APP_CLIENT_ID: "7jah267rq3oqtuklqupqnct0b",
    IDENTITY_POOL_ID: "us-east-1:e544324d-b8f1-4930-b918-55febb6df399"
  }, 
  STRIPE_KEY: "pk_test_yxp3O9N6DSH3dVhPyLfgFIJY",
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "aa-notes-app-2-api-prod-attachmentsbucket-8u9itownwa9n"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kwhp3j2l5m.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_JDYYh52QW",
    APP_CLIENT_ID: "6scbuhib2agu76at1n21emfb08",
    IDENTITY_POOL_ID: "us-east-1:4e1b96cf-919f-4a2b-8939-534a81cb9be9"
  }, 
  STRIPE_KEY: "pk_test_yxp3O9N6DSH3dVhPyLfgFIJY",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};