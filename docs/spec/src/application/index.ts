import { RelationshipClass, StepSpec } from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../../../src/config';

export const applicationSpec: StepSpec<IntegrationConfig>[] = [
  {
    /**
     * ENDPOINT: https://localhost/api/v1/users
     * PATTERN: Fetch Entities
     */
    id: 'fetch-applications',
    name: 'Fetch Applications',
    entities: [
      {
        resourceName: 'Application and Mobile Application',
        _type: 'whitehat_application',
        _class: ['Application'],
      },
    ],
    relationships: [
      {
        _type: 'whitehat_asset_has_application',
        sourceType: 'whitehat_asset',
        _class: RelationshipClass.HAS,
        targetType: 'whitehat_application',
      },
    ],
    dependsOn: ['fetch-assets'],
    implemented: true,
  },
];
