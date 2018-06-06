/*
 * Waltz - Enterprise Architecture
 * Copyright (C) 2016, 2017 Waltz open source project
 * See README.md for more information
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {initialiseData} from "../../common/index";


const initialState = {
    parentEntityRef: {
        id: 16,
        kind: 'FLOW_DIAGRAM'
    },
    time: new Date('2018-05-30'),
    time1: new Date('2018-05-31'),
    time2: new Date('2018-06-01'),
    time3: new Date('2018-06-02'),
    daysOnly: true
};

function controller($stateParams, serviceBroker) {
    const vm = initialiseData(this, initialState);

    vm.onSelectorEntitySelect = (item, ctx) => {
        console.log({ctx, item});
    };
}


controller.$inject = [
    '$stateParams',
    'ServiceBroker'
];


const view = {
    template: require('./playpen3.html'),
    controller,
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {}
};


export default view;
