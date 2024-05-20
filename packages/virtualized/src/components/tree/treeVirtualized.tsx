/* !
 * (c) Copyright 2022 Palantir Technologies Inc. All rights reserved.
 */

import * as React from "react";

import { ITreeNode, TreeNode } from "./treeNodeVirtualized";

{
    /** Total tree view */
    /*
<div class="#{$ns}-tree #{$ns}-elevation-0">
  <ul class="#{$ns}-tree-node-list #{$ns}-tree-root">
    // NODE
  </ul>
</div>
*/
}

export interface ITreeVirtualizedProps {
    /**
     * Data to be presented within the tree.
     */
    content: ITreeNode[];

    /**
     * The fixed height for the tree component in px.
     */
    height?: number;

    /**
     * The fixed wdith for the tree component in px.
     */
    width?: number;
}

export function TreeVirtualized(props: ITreeVirtualizedProps): JSX.Element {
    const { content } = props;

    const [treeData, setTreeData] = React.useState(content);

    return (
        <div>
            <ul>
                {treeData.flatMap(node => (
                    <TreeNode
                        children={node.children}
                        content={node.content}
                        label={node.label}
                        nodeId={node.nodeId}
                        onExpand={setTreeData}
                    />
                ))}
            </ul>
        </div>
    );
}
