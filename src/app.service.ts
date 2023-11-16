import { BadRequestException, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import { csvMapper } from './utils/mapper';
import { CsvRow } from './interface/csvrow.interface';

@Injectable()
export class AppService {
  constructor(private readonly csvMapper: csvMapper) {}

  getHello(): string {
    return 'Hello World!';
  }

  async parseData() {
    const filePath = '/home/keval/contextine/csv-parser/src/csv/test.csv';

    try {
      const rows = [];

      await new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
          .pipe(
            csvParser({
              headers: [
                'ATM_Id',
                'Location',
                'State',
                'Address',
                'Card_Number',
                'Date_of_Transaction',
                'Time_of_Transaction',
                'Sequence_Number',
                'Transaction_Type',
                'Total_Amount',
                'Response_Code',
              ],
              skipLines: 1,
            }),
          )
          .on('data', async (row) => {
            console.log(row, 'sdasdasd');

            rows.push(await this.csvMapper.mapCsVData(row));
          })
          .on('end', () => {
            resolve(undefined);
          })
          .on('error', (error) => {
            reject(error);
          });
      });
      return rows;
    } catch (error) {
      console.log(error.message);
      throw new BadRequestException(error);
    }
  }
}
