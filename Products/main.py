from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from google.appengine.ext import db
import json
import random

class Product(db.Model):
  name = db.StringProperty(required=True)
  calif = db.StringProperty()

class User(db.Model):
  name = db.StringProperty(required=True)
  age = db.StringProperty(required=True)
  group = db.StringProperty(required=True)
  career = db.StringProperty(required=True)
  actual = db.BooleanProperty(required=True)

class ProductSelect(db.Model):
  user = db.StringProperty()
  product = db.StringProperty()
  productcalif = db.StringProperty()
  precio = db.StringProperty()

class MainHandler(webapp.RequestHandler):
    def get(self):
        product = (self.request.get_all("product"))[0]
        s = Product.all()
        s.filter("name =", product)
        u = User.all()
        u.filter("name =", "cecy")
        if u.count() == 0:
          c = User(name="cecy", group="1", career="ing", age="23", actual=True)
          c.put()
        if s.count() == 0:
          ran_calif = str(random.randint(1,10))
          p = Product(name=product, calif=ran_calif)
          p.put()
          status = "%s agregado" %product
          #self.response.out.write("%s agregado" %product)
        else:
          status = "%s ya existia" %product
          ran_calif = Product.gql("WHERE name = :name", name=product).get().calif
          print ran_calif
          #self.response.out.write("%s ya existia" %product) 
        #self.response.out.write("33333333333333333333") 
        self.response.headers['Content-Type'] = 'application/json'   
        obj = {
          'status': status, 
          'califecol': ran_calif,
          } 
        self.response.out.write(json.dumps(obj))
        

class SaveProduct(webapp.RequestHandler):
    def get(self):
        product = (self.request.get_all("product"))[0]
        precio = (self.request.get_all("precio"))[0]
        calif = Product.gql("WHERE name = :name", name=product).get().calif
        user = User.gql("WHERE actual = :actual", actual=True).get().name
        self.response.out.write(product)
        p = ProductSelect(product=product, productcalif=calif, user=user, precio=precio)
        p.put()


app = webapp.WSGIApplication([('/', MainHandler), ('/savep', SaveProduct)],
                             debug=True)


def main():
    app = webapp.WSGIApplication([('/', MainHandler), ('/savep', SaveProduct)],
                                 debug=True)
    util.run_wsgi_app(app)


if __name__ == '__main__':
    main()
