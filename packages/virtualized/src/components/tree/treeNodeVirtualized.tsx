/* !
 * (c) Copyright 2022 Palantir Technologies Inc. All rights reserved.
 */

// Some foo comment to shush the linter

import * as React from "react";

import { Icon, IconName } from "@blueprintjs/core";

{
    /** Node view */
    /*

// Total Node
<li class="#{$ns}-tree-node #{$ns}-tree-node-expanded">

    // Node header
    <div class="#{$ns}-tree-node-content">   // Node wrapper
        <span class="#{$ns}-tree-node-caret #{$ns}-tree-node-caret-open #{$ns}-icon-standard"></span>  // caret
        <span class="#{$ns}-tree-node-icon #{$ns}-icon-standard #{$ns}-icon-folder-close"></span>   // icon
        <span class="#{$ns}-tree-node-label">Label</span>   // label
        <span class="#{$ns}-tree-node-secondary-label">Secondary label</span>   // secondary label
    </div>

    // Node body
    <ul class="#{$ns}-tree-node-list">
        <li class="#{$ns}-tree-node">
            <div class="#{$ns}-tree-node-content">   // Node header wrapper
                <span class="#{$ns}-tree-node-caret-none #{$ns}-icon-standard"></span>  // Caret
                <span class="#{$ns}-tree-node-icon #{$ns}-icon-standard #{$ns}-icon-document"></span>  //
                <span class="#{$ns}-tree-node-label">A Document</span>  // Node label
            </div>
        </li>
        <li class="#{$ns}-tree-node">
            <div class="#{$ns}-tree-node-content">
            <span class="#{$ns}-tree-node-caret-none #{$ns}-icon-standard"></span>
            <span class="#{$ns}-tree-node-icon #{$ns}-icon-standard #{$ns}-icon-document"></span>
            <span class="#{$ns}-tree-node-label">Another Document</span>
            </div>
        </li>
    </ul>

</li>
 */
}

export interface ITreeNode {
    /**
     * The compoenent to be presented for the node
     */
    content: JSX.Element;

    /**
     * An array of child nodes realted to this node.
     */
    children: ITreeNode[];

    /**
     * Unique identifier for a node within the Tree component.
     */
    nodeId: string;

    /**
     * The main label for the node.
     */
    label: string | JSX.Element;

    /**
     * Signifies whether the given node is expanded or not.
     *
     * @default false
     */
    isExpanded?: boolean;

    /**
     * A secondary label/component that is displayed at the right side of the node.
     */
    secondaryLabel?: string | JSX.Element;

    /**
     * The name of a Blueprint icon (or an icon element) to render next to the node's label.
     */
    icon?: IconName | JSX.Element;

    onExpand: (nodeId: string) => void;
}

export function TreeNode(props: ITreeNode): JSX.Element {
    const { children, isExpanded, label, secondaryLabel, icon } = props;

    const hasCaret: boolean = children.length > 0 ? true : false;
    const expanded: boolean = isExpanded ?? false;
    const header: JSX.Element = NodeHeader({ label, secondaryLabel, hasCaret, expanded, icon });

    const nodeChildren: JSX.Element =
        isExpanded === true ? (
            <ul>
                {children.map(child => {
                    return <li key={child.nodeId}>{TreeNode(child)}</li>;
                })}
            </ul>
        ) : (
            <span>Nothing to see here</span>
        );

    return (
        <li>
            <div>{header}</div>
            {nodeChildren}
        </li>
    );
}

/**
 // Node header
    <div class="#{$ns}-tree-node-content">   // Node wrapper
        <span class="#{$ns}-tree-node-caret #{$ns}-tree-node-caret-open #{$ns}-icon-standard"></span>  // caret
        <span class="#{$ns}-tree-node-icon #{$ns}-icon-standard #{$ns}-icon-folder-close"></span>   // icon
        <span class="#{$ns}-tree-node-label">Label</span>   // label
        <span class="#{$ns}-tree-node-secondary-label">Secondary label</span>   // secondary label
    </div>
 */

interface ITreeHeader {
    /**
     * The main label for the node.
     */
    label: string | JSX.Element;

    /**
     * A secondary label/component that is displayed at the right side of the node.
     */
    secondaryLabel?: string | JSX.Element;

    /**
     * Whether the caret to expand/collapse a node should be shown.
     * If not specified, this will be true if the node has children and false otherwise.
     */
    hasCaret: boolean;

    /**
     * The name of a Blueprint icon (or an icon element) to render next to the node's label.
     */
    icon?: IconName | JSX.Element;

    /**
     * Signifies whether the given node is expanded or not.
     *
     * @default false
     */
    expanded: boolean;
}

function NodeHeader(props: ITreeHeader): JSX.Element {
    const { label, secondaryLabel, hasCaret, icon, expanded } = props;

    const nodeCaret: JSX.Element | undefined = hasCaret ? (
        <Icon icon={"chevron-right"} title={expanded ? "Collapse node" : "Exapnd node"} />
    ) : undefined;
    const maybeRenderSecondaryLabel: JSX.Element | undefined =
        secondaryLabel !== undefined ? <span>{secondaryLabel}</span> : undefined;

    return (
        <div>
            {nodeCaret}
            <Icon icon={icon} />
            <span>{label}</span>
            {maybeRenderSecondaryLabel}
        </div>
    );
}
