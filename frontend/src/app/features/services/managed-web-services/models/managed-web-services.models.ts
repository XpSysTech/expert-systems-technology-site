export type ResponsibilityLevel = 'Included' | 'As Required' | 'Limited' | 'Custom' | 'Not Typical';

export interface ManagedServiceClassification {
  readonly code: string;
  readonly slug: 'managed-website' | 'managed-web-platform' | 'managed-application';
  readonly title: string;
  readonly audience: string;
  readonly summary: string;
  readonly price: string;
  readonly action: string;
}

export interface ResponsibilityRow {
  readonly responsibility: string;
  readonly website: ResponsibilityLevel;
  readonly platform: ResponsibilityLevel;
  readonly application: ResponsibilityLevel;
}

export interface ManagedWebPlatformEnquiry {
  readonly organisation: Readonly<Record<string, string>>;
  readonly platform: Readonly<Record<string, string | readonly string[]>>;
  readonly users: Readonly<Record<string, string | readonly string[]>>;
  readonly functions: Readonly<Record<string, string | readonly string[]>>;
  readonly integrations: Readonly<Record<string, string | boolean>>;
  readonly data: Readonly<Record<string, string | boolean>>;
  readonly security: Readonly<Record<string, string | boolean>>;
  readonly usage: Readonly<Record<string, string>>;
  readonly existingSystems: Readonly<Record<string, string | boolean>>;
  readonly contact: Readonly<Record<string, string | boolean>>;
}

export interface ManagedApplicationEnquiry {
  readonly organisation: Readonly<Record<string, string>>;
  readonly requirements: Readonly<Record<string, string>>;
  readonly operations: Readonly<Record<string, string>>;
  readonly contact: Readonly<Record<string, string | boolean | Date | null>>;
}

export interface ManagedWebsiteEnquiry {
  readonly organisation: Readonly<Record<string, string>>;
  readonly project: Readonly<Record<string, string | readonly string[]>>;
  readonly content: Readonly<Record<string, string>>;
  readonly operation: Readonly<Record<string, string>>;
  readonly contact: Readonly<Record<string, string | boolean>>;
}

export interface CallbackEnquiry {
  readonly contact: Readonly<Record<string, string | boolean>>;
  readonly request: Readonly<Record<string, string>>;
}

export type ManagedEnquiryPayload =
  | ManagedWebsiteEnquiry
  | ManagedWebPlatformEnquiry
  | ManagedApplicationEnquiry
  | CallbackEnquiry;

export type ManagedEnquiryKind =
  | 'managed-website'
  | 'managed-web-platform'
  | 'managed-application'
  | 'callback';

export interface ManagedEnquiryRequest {
  readonly kind: ManagedEnquiryKind;
  readonly payload: ManagedEnquiryPayload;
}

export interface ManagedEnquiryResponse {
  readonly enquiryId?: string;
  readonly delivery: 'api' | 'whatsapp';
  readonly destination: string;
}
