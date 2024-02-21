/* Copyright © 2024 Exact Realty Limited. All rights reserved.
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

import { Asn1ContextSpecific } from '@exact-realty/asn1-der';
import PasswordRecipientInfo from './PasswordRecipientInfo.js';
import CMSVersion from './CMSVersion.js';

/*
   RecipientInfo ::= CHOICE {
     ktri KeyTransRecipientInfo,
     kari [1] KeyAgreeRecipientInfo,
     kekri [2] KEKRecipientInfo,
     pwri [3] PasswordRecipientInfo,
     ori [4] OtherRecipientInfo }
*/

class RecipientInfo extends Asn1ContextSpecific {
	version_: CMSVersion;

	constructor(value: PasswordRecipientInfo) {
		// Only PasswordRecipientInfo is implemented
		super(3, value, false);
		this.version_ = value.version;
	}

	get kind(): Readonly<typeof PasswordRecipientInfo> {
		return PasswordRecipientInfo;
	}

	get version(): Readonly<CMSVersion> {
		return this.version_;
	}
}

export default RecipientInfo;