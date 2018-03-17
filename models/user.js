const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  createdAt       : { type : Date },
  updatedAt       : { type : Date },
  password        : { type : String, select: false },
  username        : { type : String, required: true, maxLength: 16 },
  posts           : [{ type : Schema.Types.ObjectId, ref: 'Post', required: true }],
  //comments      : [{ type : Schema.Types.ObjectId, ref: 'Comment', required: true}],
  teacher         : { type : String },
  firstTime       : { type: Boolean, default: true },
  web             : { type : Boolean, default: false },
  mobile          : { type : Boolean, default: false },
  beginner        : { type : Boolean, default: false },
  intermediate    : { type : Boolean, default: false },
  advanced        : { type : Boolean, default: false },
  teacheracc      : { type : Boolean, default: false },
  group           : { type : String },
  students        : [{type : String}],
  student         : { type : Boolean, default: true },
  email           : {type : String},
  image           : {type : String},
  firstname       : {type : String},
  lastname        : {type : String},
  Age             : {type : String},
  School          : {type : String},
  location        : {type : String},
  phone           : {type : String},
  session         : {type: String},
  nextSession     : {type: String},
  sessionFirst    : {type : Boolean, default: true },
  github          : {type: String},
  addGithub       : {type : Boolean, default: false},
  addFreeCodeCamp : {type : Boolean, default: false},
  freecodecamp    : {type: String},
});

UserSchema.pre('save', function(next) {
  // SET createdAt AND updatedAt
  const now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }

  // ENCRYPT PASSWORD
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });
});


UserSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

UserSchema.methods.compareUsername = function(username, done) {
  bcrypt.compare(username, this.username, (err, isMatch) => {
    done(err, isMatch);
  });
};


module.exports = mongoose.model('User', UserSchema);
