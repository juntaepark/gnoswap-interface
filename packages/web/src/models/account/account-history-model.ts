import { TokenPairModel } from "./../token/token-pair-model";
import { TokenDefaultModel } from "./../token/token-default-model";
import { NotificationType, StatusOptions } from "@/common/values/data-constant";

export interface AccountHistoryModel {
	txs: Array<TransactionModel>;
}
export interface TransactionModel {
	txType: NotificationType;
	txHash: string;
	tokenInfo: TokenDefaultModel | TokenPairModel;
	status: StatusOptions;
	createdAt: string;
}