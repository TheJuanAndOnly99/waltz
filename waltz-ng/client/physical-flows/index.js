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

import angular from "angular";

import { registerComponents, registerStores } from "../common/module-utils";

import BulkPhysicalFlowLoaderWizard from "./components/bulk-physical-flow-loader-wizard/bulk-physical-flow-loader-wizard";
import BulkPhysicalFlowParser from "./components/bulk-physical-flow-parser/bulk-physical-flow-parser";
import BulkPhysicalFlowUploader from "./components/bulk-physical-flow-uploader/bulk-physical-flow-uploader";
import * as PhysicalFlowStore from "./services/physical-flow-store";
import * as PhysicalFlowParticipantStore from "./services/physical-flow-participant-store";
import PhysicalFlowEditor from "./components/flow-editor/physical-flow-editor";
import PhysicalFlowCloneSelector from "./components/register/clone/physical-flow-clone-selector";
import PhysicalFlowOverview from "./components/overview/physical-flow-overview";
import PhysicalFlowOverviewNode from "./components/overview/physical-flow-overview-node";
import PhysicalFlowEditOverview from "./components/register/overview/physical-flow-edit-overview";
import PhysicalFlowEditTargetLogicalFlow from "./components/register/edit-target-logical-flow/physical-flow-edit-target-logical-flow";
import PhysicalFlowEditSpecification from "./components/register/edit-specification/physical-flow-edit-specification";
import PhysicalFlowAttributeEditor from "./components/register/attribute-editor/physical-flow-attribute-editor";
import PhysicalFlowTable from "./components/flow-table/physical-flow-table";
import PhysicalFlowExportButtons from "./components/export-buttons/physical-flow-export-buttons";
import PhysicalFlowSection from "./components/physical-flow-section/physical-flow-section";
import PhysicalFlowParticipantSection from "./components/participants-section/physical-flow-participants-section";

import Routes from "./routes";

function setup() {
    const module = angular.module("waltz.physical.flows", []);

    module
        .config(Routes);

    registerStores(module, [
        PhysicalFlowStore,
        PhysicalFlowParticipantStore
    ]);

    module
        .component("waltzPhysicalFlowTable", PhysicalFlowTable)
        .component("waltzPhysicalFlowExportButtons", PhysicalFlowExportButtons);

    registerComponents(module, [
        BulkPhysicalFlowLoaderWizard,
        BulkPhysicalFlowParser,
        BulkPhysicalFlowUploader,
        PhysicalFlowCloneSelector,
        PhysicalFlowEditor,
        PhysicalFlowOverview,
        PhysicalFlowOverviewNode,
        PhysicalFlowEditOverview,
        PhysicalFlowEditTargetLogicalFlow,
        PhysicalFlowEditSpecification,
        PhysicalFlowAttributeEditor,
        PhysicalFlowSection,
        PhysicalFlowParticipantSection
    ]);
    return module.name;
}


export default setup;
