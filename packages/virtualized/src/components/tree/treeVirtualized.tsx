/* !
 * (c) Copyright 2022 Palantir Technologies Inc. All rights reserved.
 */

import * as React from "react";

export interface ITreeVirtualized {
    foo: string;
}

export function TreeVirtualized(_props: ITreeVirtualized): JSX.Element {
    return <div>"TreeVirtualized component"</div>;
}
