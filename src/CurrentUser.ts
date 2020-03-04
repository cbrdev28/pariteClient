/**
 * A simple singleton class to keep track
 * of the current user in memory
 */

export class CurrentUser {
  private static instance: CurrentUser;
  // public userId?: number = 1;
  // public name: string = 'Bazoo';
  public userId?: number = undefined;
  public name: string = '';

  private constructor() {}

  public static get(): CurrentUser {
    if (!CurrentUser.instance) {
      CurrentUser.instance = new CurrentUser();
    }
    return CurrentUser.instance;
  }
}
