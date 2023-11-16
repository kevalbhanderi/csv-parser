export class csvMapper {
  mapCsVData = async (row) => {
    const customerId = 'bc1aa090-ac0f-11ea-b982-89011e7328f3';
    const dateParts = row.Date_of_Transaction.split('-');
    const date = new Date(`${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`);
    const hourParts = row.Time_of_Transaction.split(':');
    const hour = parseInt(hourParts[0], 10);

    const cardNumber = `xxxxxx${row.Card_Number.slice(-4)}`;

    return {
      type: 'return',
      value: {
        customerId: customerId,
        details: {
          'ATM Id': row.ATM_Id,
          'Card number': cardNumber,
          'Date of transaction': `${date.toLocaleString('default', {
            month: 'short',
          })}-${dateParts[1]}-${dateParts[0]}`,
          'Day of week': date.toLocaleDateString('en-US', { weekday: 'long' }),
          'Hour of transaction': hour,
          'Hour period of transaction': `${row.Date_of_Transaction} ${hour}-${
            hour + 1
          } ${hour >= 12 ? 'PM' : 'AM'}`,
          Receipt: `            Date: ${row.Date_of_Transaction} ${row.Time_of_Transaction} 
              ATM ID: ${row.ATM_Id}
     Sequence Number: ${row.Sequence_Number}
    
     Card Number: ${cardNumber}
    Transaction Type: ${row.Transaction_Type}
     Source Code: Host Decision, Return  
     Response Code: Transaction Approved,  
                    Available Or Payment   
                    Balance Only           
    `,
          'Received Response Code': row.Response_Code,
          'Response Code': '02',
          'Response Code Text':
            'Transaction approved, available or payment balance only',
          'Response Source Code': '5',
          'Sequence Number': row.Sequence_Number,
          'Solink Id': `${row.ATM_Id}-${row.Sequence_Number}`,
          'Source Code Text': 'Host decision, return card',
          'Terminal ID': row.ATM_Id,
          'Terminal Type': 'ATM',
          'Time of transaction': parseInt(
            row.Time_of_Transaction.replace(/:/g, ''),
            10,
          ),
          'Total Amount': parseFloat(row.Total_Amount),
          'Total Deposit': 0,
          'Total Withdrawal': 0,
          'Transaction ID': row.Sequence_Number,
          'Transaction type': row.Transaction_Type,
          externalId: row.ATM_Id,
        },
        endTime: new Date(
          `${dateParts[2]}-${dateParts[0]}-${dateParts[1]}T${row.Time_of_Transaction}.000Z`,
        ),
        isRealtime: false,
        locationId: 'd29bdb60-d9bf-11e7-a3e0-97e070186048',
        startTime: new Date(
          `${dateParts[2]}-${dateParts[0]}-${dateParts[1]}T${row.Time_of_Transaction}.000Z`,
        ),
        state: 'CLOSED',
        subtitle: `ATM ${row.ATM_Id} @ ${row.Address},${row.Location},${row.State}`,
        subtype: 'fiserveCore',
        timezoneId: 'America/Los_Angeles',
        title: row.Transaction_Type,
        transactionId: `${row.Sequence_Number}-${row.ATM_Id}`,
        type: 'transaction',
      },
    };
  };
}
