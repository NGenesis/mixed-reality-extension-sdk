/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import * as MRESDK from '../..';
import * as Payloads from '../../types/network/payloads';

/**
 * @hidden
 */
export type CreateActor = {
    message: MRESDK.Message<Payloads.CreateActorCommon>;
};

/**
 * @hidden
 */
export type CreateAnimation = {
    message: MRESDK.Message<Payloads.CreateAnimation>;
    animating: boolean;
};

/**
 * @hidden
 */
export type SyncActor = {
    actorId: string;
    created: CreateActor;
    createdAnimations: CreateAnimation[];
    behavior: MRESDK.BehaviorType;
};
