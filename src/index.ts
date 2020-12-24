export * from './base';

export * as Create from './create';

export * as Args from './args';

/**
 * Auth payload returned from a successful login request
 */
export interface AuthPayload {
  /**
   * The JWT Token used for making authenticated requests to the API
   *
   * @doc-type JWT Token String
   */
  token: string;
}

/**
 * Info payload returned from any non-standard result
 */
export interface InfoPayload {
  [key: string]: string | undefined;
  /**
   * Error title
   */
  error?: string;
  /**
   * Extra information usually non critical
   */
  info?: string;
  /**
   * Error message usually attached to an error InfoPayload
   */
  message?: string;
  /**
   * Possible Resolution usually attached to an error InfoPayload
   */
  resolution?: string;
}
