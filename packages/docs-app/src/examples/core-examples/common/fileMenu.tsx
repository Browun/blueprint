/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
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

import * as React from "react";

import { Menu, MenuDivider, Props } from "@blueprintjs/core";
import { MenuItem2 } from "@blueprintjs/popover2";

export interface IFileMenuProps extends Props {
    shouldDismissPopover?: boolean;
}

export const FileMenu: React.FC<IFileMenuProps> = props => (
    <Menu className={props.className}>
        <MenuItem2 text="New" icon="document" {...props} />
        <MenuItem2 text="Open" icon="folder-shared" {...props} />
        <MenuItem2 text="Close" icon="add-to-folder" {...props} />
        <MenuDivider />
        <MenuItem2 text="Save" icon="floppy-disk" {...props} />
        <MenuItem2 text="Save as..." icon="floppy-disk" {...props} />
        <MenuDivider />
        <MenuItem2 text="Exit" icon="cross" {...props} />
    </Menu>
);
