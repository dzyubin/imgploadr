const home = require('../../controllers/home'),
  image = require('../../controllers/image'),
  routes = require('../../server/routes');

xdescribe('Routes', () => {
  let app = {
    get: sinon.spy(),
    post: sinon.spy(),
    delete: sinon.spy(),
    use: sinon.spy()
  };

  beforeEach(() => {
    // routes.initialize(app);
    routes(app);
  });

  describe('GETs',()=>{
    it('should handle /', function(){
      expect(app.get).to.be.calledWith('/', home.index);
    });
    it('should handle /images/:image_id', () => {
      expect(app.get).to.be.calledWith('/images/:image_id', image.index);
    });
  });

  describe('POSTs', ()=>{
    it('should handle /images', ()=>{
      expect(app.post).to.be.calledWith('/images', image.create);
    });
    it('should handle /images/:image_id/like', ()=>{
      expect(app.post).to.be.calledWith('/images/:image_id/like', image.like);
    });
    it('should handle /images/:image_id/comment', ()=>{
      expect(app.post).to.be.calledWith('/images/:image_id/comment', image.comment);
    });
  });

  describe('DELETEs', ()=>{
    it('should handle /images/:image_id', ()=>{
      expect(app.delete).to.be.calledWith('/images/:image_id', image.remove);
    });
  });
});