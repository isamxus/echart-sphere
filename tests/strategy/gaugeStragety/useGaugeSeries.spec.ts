import { expect } from 'chai';
import { buildNormalGaugeSeries } from '../../../src/strategy/gaugeStragety/useGaugeSeries';

describe('useGaugeSeries', () => {
  describe('buildNormalGaugeSeries', () => {
    it('should build normal gauge series options correctly', () => {
      // Define the mock data and props
      const mockData = [
        { id: '01', x: 'Category A', y: 20 },
        { id: '02', x: 'Category B', y: 30 }
      ];
      const mockDataItems = [{ name: 'Test', labelX: 'x', labelY: 'y' }];
      const mockProps = {
        dataOptions: {
          data: mockData,
          dataItems: mockDataItems
        },
        // Include any other necessary mock properties here
      };

      // Call the method to test
      const seriesOptions = buildNormalGaugeSeries(mockProps);

      // Assertions
      expect(seriesOptions).to.be.an('array');
      expect(seriesOptions).to.have.lengthOf(mockDataItems.length);
      seriesOptions.forEach((series, index) => {
        expect(series).to.have.property('name', mockDataItems[index].name);
        expect(series).to.have.property('type', 'gauge');
        expect(series.data).to.be.an('array');
        series.data.forEach((dataPoint, dataIndex) => {
          expect(dataPoint).to.have.property('value', mockData[dataIndex].y);
          expect(dataPoint).to.have.property('name', mockData[dataIndex].x);
        });
      });
    });
  });
});