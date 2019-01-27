let ImageModel = require('../../models/image');

describe('Image Model', () => {
  var image;

  it('should have a mongoose schema', () => {
    expect(ImageModel.schema).not.to.be.undefined;
  });

  beforeEach(() => {
    image = new ImageModel({
      title: 'Test',
      description: 'Testing',
      filename: 'testfile.jpg'
    });
  });

  describe('Schema', ()=>{
    it('should have a title string', ()=>{
      expect(image.title).not.to.be.undefined;
    });
    it('should have a description string', ()=>{
      expect(image.description).not.to.be.undefined;
    });
    it('should have a filename string', ()=>{
      expect(image.filename).not.to.be.undefined;
    });
    it('should have a views number default to 0', ()=>{
      expect(image.views).not.to.be.undefined;
      expect(image.views).to.equal(0);
    });
    it('should have a likes number default to 0', ()=>{
      expect(image.likes).not.to.be.undefined;
      expect(image.likes).to.equal(0);
    });
    it('should have a timestamp date', ()=>{
      expect(image.timestamp).not.to.be.undefined;
    });
  });

  describe('Virtuals', ()=>{
    describe('uniqueId', ()=>{
      it('should be defined', ()=>{
        expect(image.uniqueId).not.to.be.undefined;
      });
      it('should get filename without extension', ()=>{
        expect(image.uniqueId).to.equal('testfile');
      });
    });
  });
});