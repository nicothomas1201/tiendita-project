let cart = []
export default function handlerCart(req, res) {

  switch(req.method){
    case 'POST':{
      cart.push(req.body)
      res.status(200).end()
    }

    case 'GET': {
      res.status(200).json(cart)
    }

    default: null

  }

  
}