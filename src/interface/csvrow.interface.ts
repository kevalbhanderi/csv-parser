export interface CsvRow {
  type: string;
  value: {
    customerId: string;
    details: {
      'ATM Id': string;
      'Card number': string;
      'Date of transaction': string;
      'Day of week': string;
      'Hour of transaction': number;
      'Hour period of transaction': string;
      Receipt: string;
      'Received Response Code': string;
      'Response Code': string;
      'Response Code Text': string;
      'Response Source Code': string;
      'Sequence Number': string;
      'Solink Id': string;
      'Source Code Text': string;
      'Terminal ID': string;
      'Terminal Type': string;
      'Time of transaction': number;
      'Total Amount': number;
      'Total Deposit': number;
      'Total Withdrawal': number;
      'Transaction ID': string;
      'Transaction type': string;
      externalId: string;
    };
    endTime: string;
    isRealtime: boolean;
    locationId: string;
    startTime: string;
    state: string;
    subtitle: string;
    subtype: string;
    timezoneId: string;
    title: string;
    transactionId: string;
    type: string;
  };
}
