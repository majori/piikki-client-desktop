import { NFC } from 'nfc-pcsc';
import store from '@/store';

const nfc = new NFC(); // optionally you can pass logger

/* eslint-disable */
nfc.on('reader', (reader) => {
  console.log(`${reader.reader.name}  device attached`);

  // needed for reading tags emulated with Android HCE
  // custom AID, change according to your Android for tag emulation
  // see https://developer.android.com/guide/topics/connectivity/nfc/hce.html
  reader.aid = 'F222222222';

  reader.on('card', (card) => {
    store.dispatch('alternativeLogin', card.uid);
    console.log(`${reader.reader.name}  card detected`, card);
  });

  reader.on('card.off', (card) => {
    console.log(`${reader.reader.name}  card removed`, card);
  });

  reader.on('error', (err) => {
    console.log(`${reader.reader.name}  an error occurred`, err);
  });

  reader.on('end', () => {
    console.log(`${reader.reader.name}  device removed`);
  });
});

nfc.on('error', (err) => {
  console.log('an error occurred', err);
});
