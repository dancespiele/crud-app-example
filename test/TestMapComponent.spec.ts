require('jsdom-global')();
import '../app/google';
import { m } from 'pyrite';
import { expect } from 'chai';
import { testMap } from './TestMapMock';

describe('Component Map', () => {
    
    before(() => {
        m.render(document.body, testMap);
    });

    it('should create the component correctly', () => {
		expect((document.body as any).vnodes[0].state).to.be.not.empty;
	});

    it('should inject attributes correctly', () => {
        expect(testMap.state.props).to.not.be.undefined;
        expect(testMap.state.props.lat).to.equal("24.6463");
        expect(testMap.state.props.lng).to.equal("57.2232");
        expect(testMap.state.props.id).to.equal("test-map");
    });

    it('should delete the component correctly', () => {
        m.render(document.body, m({ view: () => {} }));
        expect((document.body as any).vnodes[0].state).to.be.empty;
    });

});