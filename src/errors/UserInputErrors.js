import AppError from './AppError.js';

class UserInputError extends AppError {}
export class PurchaseMoneyUserInputError extends UserInputError {}
export class WinningNumbersUserInputError extends UserInputError {}
export class BonusNumberUserInputError extends UserInputError {}
