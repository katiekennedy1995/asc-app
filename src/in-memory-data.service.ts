import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const emotions = [
      { id: 11, name: 'HAPPY' },
      { id: 12, name: 'SAD' },
      { id: 13, name: 'ANGRY' },
      { id: 14, name: 'EXCITED' },
      { id: 15, name: 'ANXIOUS' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {emotions};
  }
}
