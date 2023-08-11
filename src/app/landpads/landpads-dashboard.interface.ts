export interface DashboardType {
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

export interface LaunchesType {
  id: string;
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

export interface ShipType {
  name: {
    type: 'String';
    unique: true;
    required: true;
  };
  legacy_id: {
    type: 'String';
    default: null;
  };
  model: {
    type: 'String';
    default: null;
  };
  type: {
    type: 'String';
    default: null;
  };
  roles: ['String'];
  active: {
    type: 'Boolean';
    required: true;
  };
  imo: {
    type: 'Number';
    default: null;
  };
  mmsi: {
    type: 'Number';
    default: null;
  };
  abs: {
    type: 'Number';
    default: null;
  };
  class: {
    type: 'Number';
    default: null;
  };
  mass_kg: {
    type: 'Number';
    default: null;
  };
  mass_lbs: {
    type: 'Number';
    default: null;
  };
  year_built: {
    type: 'Number';
    default: null;
  };
  home_port: {
    type: 'String';
    default: null;
  };
  status: {
    type: 'String';
    default: null;
  };
  speed_kn: {
    type: 'Number';
    default: null;
  };
  course_deg: {
    type: 'Number';
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
  last_ais_update: {
    type: 'String';
    default: null;
  };
  link: {
    type: 'String';
    default: null;
  };
  image: {
    type: 'String';
    default: null;
  };
  launches: [
    {
      type: 'UUID';
    }
  ];
}

export interface CapsuleType {
  serial: {
    type: 'String';
    required: true;
    unique: true;
  };
  status: {
    type: 'String';
    enum: ['unknown', 'active', 'retired', 'destroyed'];
    required: true;
  };
  type: {
    type: 'String';
    enum: ['Dragon 1.0', 'Dragon 1.1', 'Dragon 2.0'];
    required: true;
  };
  dragon: {
    type: 'UUID';
  };
  reuse_count: {
    type: 'Number';
    default: 0;
  };
  water_landings: {
    type: 'Number';
    default: 0;
  };
  land_landings: {
    type: 'Number';
    default: 0;
  };
  last_update: {
    type: 'String';
    default: null;
  };
  launches: [
    {
      type: 'UUID';
    }
  ];
}

export interface PayloadType {
  name: {
    type: 'String';
    default: null;
    unique: true;
  };
  type: {
    type: 'String';
    default: null;
  };
  reused: {
    type: 'Boolean';
    default: false;
  };
  launch: {
    type: 'UUID';
    default: null;
  };
  customers: ['String'];
  norad_ids: ['Number'];
  nationalities: ['String'];
  manufacturers: ['String'];
  mass_kg: {
    type: 'Number';
    default: null;
  };
  mass_lbs: {
    type: 'Number';
    default: null;
  };
  orbit: {
    type: 'String';
    default: null;
  };
  reference_system: {
    type: 'String';
    default: null;
  };
  regime: {
    type: 'String';
    default: null;
  };
  longitude: {
    type: 'Number';
    default: null;
  };
  semi_major_axis_km: {
    type: 'Number';
    default: null;
  };
  eccentricity: {
    type: 'Number';
    default: null;
  };
  periapsis_km: {
    type: 'Number';
    default: null;
  };
  apoapsis_km: {
    type: 'Number';
    default: null;
  };
  inclination_deg: {
    type: 'Number';
    default: null;
  };
  period_min: {
    type: 'Number';
    default: null;
  };
  lifespan_years: {
    type: 'Number';
    default: null;
  };
  epoch: {
    type: 'String';
    default: null;
  };
  mean_motion: {
    type: 'Number';
    default: null;
  };
  raan: {
    type: 'Number';
    default: null;
  };
  arg_of_pericenter: {
    type: 'Number';
    default: null;
  };
  mean_anomaly: {
    type: 'Number';
    default: null;
  };
  dragon: {
    capsule: {
      type: 'UUID';
      default: null;
    };
    mass_returned_kg: {
      type: 'Number';
      default: null;
    };
    mass_returned_lbs: {
      type: 'Number';
      default: null;
    };
    flight_time_sec: {
      type: 'Number';
      default: null;
    };
    manifest: {
      type: 'String';
      default: null;
    };
    water_landing: {
      type: 'Boolean';
      default: null;
    };
    land_landing: {
      type: 'Boolean';
      default: null;
    };
  };
}

export interface LandpadsNameType {
  type: string;
  default: null;
}

export interface LaunchesResponseType {
  type: string;
}

export interface LauncheIdType {
  type: string;
}

