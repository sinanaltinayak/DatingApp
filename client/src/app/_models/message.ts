export interface Message {
  id: number;
  senderId: number;
  senderUsername: string;
  senderPhotoUrl: string;
  recipientId: number;
  recipientUsername: string;
  recipientPhotoUrl?: any;
  content: string;
  dateRead?: any;
  messageSent: Date;
}
