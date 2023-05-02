import { AppsIdentity } from '../types';

export const appsIdentity: AppsIdentity = {
  discord: {
    icon: {
      size: 128
    }
  },
  facebook: {
    icon: {
      size: 180
    }
  },
  github: {
    icon: {
      size: 400
    }
  },
  instagram: {
    icon: {
      size: 110
    }
  },
  linkedin: {
    icon: {
      size: 300
    }
  },
  twitch: {
    icon: {
      size: 256
    }
  },
  twitter: {
    icon: {
      size: 256
    }
  },
  vscode: {
    icon: {
      size: 256,
      radius: 50
    }
  },
  youtube: {
    icon: {
      size: 800
    }
  }
} as const;
