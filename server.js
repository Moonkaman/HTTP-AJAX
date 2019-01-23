const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let friends = [
  {
    id: 1,
    name: 'Old Man Jenkins',
    age: 80,
    email: 'Jenkins@spongebob.com',
    posts: [
      {
        title: "It's me guys, Old Man Jenkins",
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus perferendis doloremque aliquid, fugit soluta atque dolores corrupti in. Quos quibusdam, ex nostrum similique officia iste temporibus deleniti eveniet dicta. Cum ut error eos aperiam voluptatibus repellat est repudiandae, ipsam placeat tenetur dignissimos sunt! Enim sapiente rerum, dignissimos possimus alias veniam fuga sit quibusdam itaque animi reprehenderit obcaecati quisquam adipisci dolorem velit maxime, nihil sint quaerat libero iste numquam! Labore, aliquam sapiente? Nam eos velit repudiandae necessitatibus expedita iusto quas ducimus vero suscipit commodi doloribus, voluptas explicabo dicta perferendis, aut nobis sunt libero unde blanditiis quis repellendus obcaecati. Unde, magnam.'
      },
      {
        title: "Hey I'm not sure how this post thing works, is this right?",
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus perferendis doloremque aliquid, fugit soluta atque dolores corrupti in. Quos quibusdam, ex nostrum similique officia iste temporibus deleniti eveniet dicta. Cum ut error eos aperiam voluptatibus repellat est repudiandae, ipsam placeat tenetur dignissimos sunt! Enim sapiente rerum, dignissimos possimus alias veniam fuga sit quibusdam itaque animi reprehenderit obcaecati quisquam adipisci dolorem velit maxime, nihil sint quaerat libero iste numquam! Labore, aliquam sapiente? Nam eos velit repudiandae necessitatibus expedita iusto quas ducimus vero suscipit commodi doloribus, voluptas explicabo dicta perferendis, aut nobis sunt libero unde blanditiis quis repellendus obcaecati. Unde, magnam.'
      },
      {
        title: "fdgljsdfjsdhkjl",
        body: 'Oh sorry guys I accidentally typed that as my title and I\'m not sure how to fix it, uh oops'
      }
    ]
  },
  {
    id: 2,
    name: 'Squidward',
    age: 32,
    email: 'squidward@spongebob.com',
    posts: [
      {
        title: "Here's why I think Spongebob is the worst...",
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus perferendis doloremque aliquid, fugit soluta atque dolores corrupti in. Quos quibusdam, ex nostrum similique officia iste temporibus deleniti eveniet dicta. Cum ut error eos aperiam voluptatibus repellat est repudiandae, ipsam placeat tenetur dignissimos sunt! Enim sapiente rerum, dignissimos possimus alias veniam fuga sit quibusdam itaque animi reprehenderit obcaecati quisquam adipisci dolorem velit maxime, nihil sint quaerat libero iste numquam! Labore, aliquam sapiente? Nam eos velit repudiandae necessitatibus expedita iusto quas ducimus vero suscipit commodi doloribus, voluptas explicabo dicta perferendis, aut nobis sunt libero unde blanditiis quis repellendus obcaecati. Unde, magnam.'
      },
      {
        title: "Hey guys I lost my clarinet, has anyone seen it?",
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus perferendis doloremque aliquid, fugit soluta atque dolores corrupti in. Quos quibusdam, ex nostrum similique officia iste temporibus deleniti eveniet dicta. Cum ut error eos aperiam voluptatibus repellat est repudiandae, ipsam placeat tenetur dignissimos sunt! Enim sapiente rerum, dignissimos possimus alias veniam fuga sit quibusdam itaque animi reprehenderit obcaecati quisquam adipisci dolorem velit maxime, nihil sint quaerat libero iste numquam! Labore, aliquam sapiente? Nam eos velit repudiandae necessitatibus expedita iusto quas ducimus vero suscipit commodi doloribus, voluptas explicabo dicta perferendis, aut nobis sunt libero unde blanditiis quis repellendus obcaecati. Unde, magnam.'
      }
    ]
  },
  {
    id: 3,
    name: 'Spongebob',
    age: 25,
    email: 'spongebob@spongebob.com',
    posts: [
      {
        title: "The Krusty Krab is the best place of all time",
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus perferendis doloremque aliquid, fugit soluta atque dolores corrupti in. Quos quibusdam, ex nostrum similique officia iste temporibus deleniti eveniet dicta. Cum ut error eos aperiam voluptatibus repellat est repudiandae, ipsam placeat tenetur dignissimos sunt! Enim sapiente rerum, dignissimos possimus alias veniam fuga sit quibusdam itaque animi reprehenderit obcaecati quisquam adipisci dolorem velit maxime, nihil sint quaerat libero iste numquam! Labore, aliquam sapiente? Nam eos velit repudiandae necessitatibus expedita iusto quas ducimus vero suscipit commodi doloribus, voluptas explicabo dicta perferendis, aut nobis sunt libero unde blanditiis quis repellendus obcaecati. Unde, magnam.'
      },
      {
        title: "Here's some tips on how to bathe your pet snail",
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus perferendis doloremque aliquid, fugit soluta atque dolores corrupti in. Quos quibusdam, ex nostrum similique officia iste temporibus deleniti eveniet dicta. Cum ut error eos aperiam voluptatibus repellat est repudiandae, ipsam placeat tenetur dignissimos sunt! Enim sapiente rerum, dignissimos possimus alias veniam fuga sit quibusdam itaque animi reprehenderit obcaecati quisquam adipisci dolorem velit maxime, nihil sint quaerat libero iste numquam! Labore, aliquam sapiente? Nam eos velit repudiandae necessitatibus expedita iusto quas ducimus vero suscipit commodi doloribus, voluptas explicabo dicta perferendis, aut nobis sunt libero unde blanditiis quis repellendus obcaecati. Unde, magnam.'
      },
      {
        title: "I think I found a way to work more hours at the Krusty Krab",
        body: "I figured out that if I hide in the kitchen and wait for Mr.Krabs to leave then I can sleep in the Krusty Krab and Work through the night and it's my greatest discovery of all time."
      },
      {
        title: "Sometimes I just come on here to write to squidward",
        body: "I hope you see this squidward. I just wanted to say hi and that you are really good at the clarinet also I made you a sweater out of my eyelashes so please come get it okay squidward?"
      }
    ]
  },
  {
    id: 4,
    name: 'Mr.Krabs',
    age: 48,
    email: 'mrkrabs@spongebob.com',
    posts: [
      {
        title: "How can I make more money?",
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus perferendis doloremque aliquid, fugit soluta atque dolores corrupti in. Quos quibusdam, ex nostrum similique officia iste temporibus deleniti eveniet dicta. Cum ut error eos aperiam voluptatibus repellat est repudiandae, ipsam placeat tenetur dignissimos sunt! Enim sapiente rerum, dignissimos possimus alias veniam fuga sit quibusdam itaque animi reprehenderit obcaecati quisquam adipisci dolorem velit maxime, nihil sint quaerat libero iste numquam! Labore, aliquam sapiente? Nam eos velit repudiandae necessitatibus expedita iusto quas ducimus vero suscipit commodi doloribus, voluptas explicabo dicta perferendis, aut nobis sunt libero unde blanditiis quis repellendus obcaecati. Unde, magnam.'
      }
    ]
  },
  {
    id: 5,
    name: 'Patrick',
    age: 25,
    email: 'patrick@spongebob.com',
    posts: [
      {
        title: "We have technology...",
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus perferendis doloremque aliquid, fugit soluta atque dolores corrupti in. Quos quibusdam, ex nostrum similique officia iste temporibus deleniti eveniet dicta. Cum ut error eos aperiam voluptatibus repellat est repudiandae, ipsam placeat tenetur dignissimos sunt! Enim sapiente rerum, dignissimos possimus alias veniam fuga sit quibusdam itaque animi reprehenderit obcaecati quisquam adipisci dolorem velit maxime, nihil sint quaerat libero iste numquam! Labore, aliquam sapiente? Nam eos velit repudiandae necessitatibus expedita iusto quas ducimus vero suscipit commodi doloribus, voluptas explicabo dicta perferendis, aut nobis sunt libero unde blanditiis quis repellendus obcaecati. Unde, magnam.'
      },
      {
        title: "Wee woo wee woo",
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus perferendis doloremque aliquid, fugit soluta atque dolores corrupti in. Quos quibusdam, ex nostrum similique officia iste temporibus deleniti eveniet dicta. Cum ut error eos aperiam voluptatibus repellat est repudiandae, ipsam placeat tenetur dignissimos sunt! Enim sapiente rerum, dignissimos possimus alias veniam fuga sit quibusdam itaque animi reprehenderit obcaecati quisquam adipisci dolorem velit maxime, nihil sint quaerat libero iste numquam! Labore, aliquam sapiente? Nam eos velit repudiandae necessitatibus expedita iusto quas ducimus vero suscipit commodi doloribus, voluptas explicabo dicta perferendis, aut nobis sunt libero unde blanditiis quis repellendus obcaecati. Unde, magnam.'
      }
    ]
  },
  {
    id: 6,
    name: 'Plankton',
    age: 47,
    email: 'luis@lambdaschool.com',
    posts: []
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/friends', (req, res) => {
  res.status(200).json(friends);
});

app.post('/friends', (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put('/friends/:id', (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete('/friends/:id', (req, res) => {
  friends = friends.filter(friend => friend.id != req.params.id);
  res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
