/*
 * Waltz - Enterprise Architecture
 * Copyright (C) 2016, 2017, 2018, 2019 Waltz open source project
 * See README.md for more information
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific
 *
 */

import _ from "lodash";
import {CORE_API} from "../../../common/services/core-api-utils";
import {initialiseData} from "../../../common";
import {mkSelectionOptions} from "../../../common/selector-utils";
import {loadAssessments} from "../../../assessments/assessment-utils";

import template from "./licence-section.html";


const bindings = {
    parentEntityRef: "<",
};


const initialState = {
    licences: [],
};


function controller($q, serviceBroker) {
    const vm = initialiseData(this, initialState);

    vm.$onChanges = (changes) => {
        if(vm.parentEntityRef) {
            const licencePromise = serviceBroker
                .loadViewData(CORE_API.LicenceStore.findBySelector, [mkSelectionOptions(vm.parentEntityRef)])
                .then(r => r.data);

            $q.all([licencePromise, loadAssessments($q, serviceBroker)])
                .then(([licences, assessments]) => {
                    vm.assessmentDefinitions = assessments.definitions;
                    const assessmentsByLicenceId = assessments.assessmentsByLicenceId;

                    vm.licences =_.map(
                        licences,
                        l => {
                            const assessmentsByDefinitionExtId = _.get(assessmentsByLicenceId, l.id, []);
                            return Object.assign({}, l, assessmentsByDefinitionExtId)
                        });
                });
        }
    };

}


controller.$inject = [
    "$q",
    "ServiceBroker"
];


const component = {
    template,
    bindings,
    controller
};


export default {
    component,
    id: "waltzLicenceSection"
};
