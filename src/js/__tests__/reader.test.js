import read from '../reader';

describe('read', () => {
  test('should return ArrayBuffer', async () => {
    // Arrange
    const testData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const buffer = new ArrayBuffer(testData.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < testData.length; i++) {
      bufferView[i] = testData.charCodeAt(i);
    }

    // Act
    const result = await read();

    // Assert
    expect(result).toBeInstanceOf(ArrayBuffer);
    
  });
});