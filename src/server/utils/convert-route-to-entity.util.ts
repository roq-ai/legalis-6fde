const mapping: Record<string, string> = {
  renamedcases: 'Renamedcase',
  'legal-documents': 'legal_document',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
