const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.error('Could not connect to MongoDB', err));

    const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: Date,
        isPublished: Boolean,
        price: Number
    });

    // Compile schema into a model
// PascalCase to name our classes, e.g., Course
const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    return courses = await Course
    .find({isPublished: true, tags: 'backend'})
    .sort({ name: 1 })
    .select({ name: 1, author: 1, price: 1})
};

async function run() {
    const courses = await getCourses();
    console.log(courses);
  }
  
  run();
  