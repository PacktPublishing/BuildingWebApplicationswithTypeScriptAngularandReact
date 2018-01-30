export interface Room {
	name: string;
	messages: Message[];
}
export interface Exception {
	title: string;
	content: string;
}

export class Message {
	id: number;
	user: string;
	content: string;
	isAuthor: boolean;
}
