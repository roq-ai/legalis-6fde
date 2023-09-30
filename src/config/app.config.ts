interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Site Owner'],
  customerRoles: [],
  tenantRoles: ['Site Owner', 'Legal Researcher', 'Legal Analyst', 'Legal Advisor', 'End User'],
  tenantName: 'Team',
  applicationName: 'Legalis',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage team details', 'Manage legal documents', 'Manage cases'],
  getQuoteUrl: 'https://app.roq.ai/proposal/97548d73-5254-41cd-abaf-a6dd4c4a109f',
};
