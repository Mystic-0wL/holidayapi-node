import { HolidayAPI } from 'holidayapi';
const key = 'f580c08b-36c4-4efe-a1cd-f63e35013a73'
const holidayApi = new HolidayAPI({ key });

const result = holidayApi.holidays({
  country: 'ES',
  year: '2024',
}).then(response => {
    console.log(response);
    }
);

console.log(result);