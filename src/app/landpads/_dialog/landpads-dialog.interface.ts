export interface LandPadsOptionsType {
  buttonText: {
    cancel: string;
  };
  launchesDetails: [
    {
      name: {
        type: 'String';
        default: null;
      };
      full_name: {
        type: 'String';
        default: null;
      };
      status: {
        type: 'String';
        enum: [
          'active',
          'inactive',
          'unknown',
          'retired',
          'lost',
          'under construction'
        ];
        required: true;
      };
      type: {
        type: 'String';
        default: null;
      };
      locality: {
        type: 'String';
        default: null;
      };
      region: {
        type: 'String';
        default: null;
      };
      latitude: {
        type: 'Number';
        default: null;
      };
      longitude: {
        type: 'Number';
        default: null;
      };
      landing_attempts: {
        type: 'Number';
        default: 0;
      };
      landing_successes: {
        type: 'Number';
        default: 0;
      };
      wikipedia: {
        type: 'String';
        default: null;
      };
      details: {
        type: 'String';
        default: null;
      };
      launches: [
        {
          type: 'UUID';
        }
      ];
    }
  ];
}
export interface LaunchesDetails {
  ships: [
    '5ea6ed2e080df4000697c906',
    '5ea6ed2f080df4000697c90b',
    '5ea6ed2f080df4000697c90c',
    '5ea6ed30080df4000697c912'
  ];
  capsules: [];
  payloads: ['5eb0e4beb6c3bb0006eeb1fd'];
  launchpad: '5e9e4501f509094ba4566f84';
  id: '5eb87cefffd86e000604b342';
}
