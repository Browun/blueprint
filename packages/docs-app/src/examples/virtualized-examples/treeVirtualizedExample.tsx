/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";

import { H1 } from "@blueprintjs/core";
import { ITreeNode, TreeVirtualized } from "@blueprintjs/virtualized";

export function TreeVirtualizedExample(): JSX.Element {
    const node0: ITreeNode = {
        children: [],
        content: <></>,
        isExpanded: false,
        label: (
            <>
                <H1>Node0</H1>
            </>
        ),
        nodeId: "node0",
    };
    const node1: ITreeNode = {
        children: [node0],
        content: <></>,
        isExpanded: false,
        label: (
            <>
                <H1>Node1</H1>
            </>
        ),
        nodeId: "node1",
    };
    const node2: ITreeNode = {
        children: [],
        content: <></>,
        isExpanded: false,
        label: (
            <>
                <H1>Node2</H1>
            </>
        ),
        nodeId: "node2",
    };
    return TreeVirtualized({ content: [node1, node2] });
}
