import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../server/index';

chai.use(chaiHttp);

describe('App', () => {
	it('should return a welcome message', () => {

	});
});
