import './styles/index.scss';
import $ from "jquery";

const userStack = {
    language: 'Javascript',
    framework: 'Angular'
};

const user = {
    name: 'Julia',
    age: '27',
    // jshint ignore:start
    ...userStack
    // jshint ignore:end
};

$('.block').html('jQuery is working');

console.log(user);




